import { NextRequest, NextResponse } from 'next/server';
import { writeFileSync, readFileSync } from 'fs';
import { join } from 'path';

const DATA_FILE = join(process.cwd(), 'data/messages.json');

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
