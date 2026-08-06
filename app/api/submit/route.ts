import { NextRequest, NextResponse } from 'next/server';
import { writeFileSync, readFileSync, mkdirSync, unlinkSync } from 'fs';
import { join } from 'path';

// 使用 /tmp 目录（Serverless 环境可写）
const DATA_DIR = process.env.NODE_ENV === 'production' 
  ? '/tmp/hospital-data' 
  : join(process.cwd(), 'data');
const DATA_FILE = join(DATA_DIR, 'messages.json');

interface Message {
  id: string;
  name: string;
  phone: string;
  department: string;
  message: string;
  createdAt: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // 支持清空全部
    if (body.messages !== undefined && Array.isArray(body.messages)) {
      try {
        mkdirSync(DATA_DIR, { recursive: true });
        writeFileSync(DATA_FILE, JSON.stringify(body.messages, null, 2));
        return NextResponse.json({ success: true });
      } catch (error) {
        return NextResponse.json(
          { error: '清空失败' },
          { status: 500 }
        );
      }
    }
    
    // 支持删除单条
    if (body.deleteId) {
      let messages: Message[] = [];
      try {
        const data = readFileSync(DATA_FILE, 'utf-8');
        messages = JSON.parse(data);
      } catch {}
      
      messages = messages.filter((m: Message) => m.id !== body.deleteId);
      
      try {
        mkdirSync(DATA_DIR, { recursive: true });
        writeFileSync(DATA_FILE, JSON.stringify(messages, null, 2));
        return NextResponse.json({ success: true });
      } catch (error) {
        return NextResponse.json(
          { error: '删除失败' },
          { status: 500 }
        );
      }
    }
    
    // 正常提交
    const { name, phone, department, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: '姓名和电话不能为空' },
        { status: 400 }
      );
    }

    const newMessage: Message = {
      id: Date.now().toString(),
      name,
      phone,
      department: department || '未选择',
      message: message || '',
      createdAt: new Date().toISOString(),
    };

    // 确保目录存在
    try {
      mkdirSync(DATA_DIR, { recursive: true });
    } catch {}

    let messages: Message[] = [];
    try {
      const existing = readFileSync(DATA_FILE, 'utf-8');
      messages = JSON.parse(existing);
    } catch {}

    messages.unshift(newMessage);

    if (messages.length > 1000) {
      messages = messages.slice(0, 1000);
    }

    writeFileSync(DATA_FILE, JSON.stringify(messages, null, 2));

    return NextResponse.json({ success: true, id: newMessage.id });
  } catch (error) {
    console.error('Submit error:', error);
    return NextResponse.json(
      { error: '提交失败，请稍后重试' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    let messages: Message[] = [];
    try {
      const data = readFileSync(DATA_FILE, 'utf-8');
      messages = JSON.parse(data);
    } catch {}
    
    return NextResponse.json({ messages });
  } catch (error) {
    console.error('Get messages error:', error);
    return NextResponse.json(
      { error: '获取数据失败' },
      { status: 500 }
    );
  }
}
