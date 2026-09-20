# Google Sheets 留言数据持久化设置指南

## 步骤1：创建Google Sheet
1. 打开 https://sheets.google.com
2. 点击"空白"创建新表格
3. 在第一行添加表头：`id` | `name` | `phone` | `department` | `message` | `createdAt`

## 步骤2：创建Apps Script
1. 在表格中点击"扩展功能" → "Apps Script"
2. 删除默认代码，粘贴以下代码：

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  if (data.action === "get") {
    var rows = sheet.getDataRange().getValues();
    var messages = [];
    for (var i = 1; i < rows.length; i++) {
      if (rows[i][0]) {
        messages.push({
          id: rows[i][0],
          name: rows[i][1],
          phone: rows[i][2],
          department: rows[i][3],
          message: rows[i][4],
          createdAt: rows[i][5] ? new Date(rows[i][5]).toISOString() : ""
        });
      }
    }
    return ContentService.createTextOutput(JSON.stringify({messages: messages})).setMimeType(ContentService.MimeType.JSON);
  }
  
  if (data.action === "add") {
    sheet.appendRow([data.id, data.name, data.phone, data.department, data.message, new Date()]);
    return ContentService.createTextOutput(JSON.stringify({success: true})).setMimeType(ContentService.MimeType.JSON);
  }
  
  if (data.action === "delete") {
    var rows = sheet.getDataRange().getValues();
    for (var i = 1; i < rows.length; i++) {
      if (rows[i][0] === data.id) {
        sheet.deleteRow(i + 1);
        break;
      }
    }
    return ContentService.createTextOutput(JSON.stringify({success: true})).setMimeType(ContentService.MimeType.JSON);
  }
  
  if (data.action === "clear") {
    sheet.clear();
    sheet.appendRow(["id", "name", "phone", "department", "message", "createdAt"]);
    return ContentService.createTextOutput(JSON.stringify({success: true})).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. 点击"保存"图标

## 步骤3：部署为Web App
1. 点击"部署" → "新增部署"
2. 选择类型："Web app"
3. 配置：
   - 描述：滕州启明眼科留言API
   - 执行身份：** me（我）**
   - 谁可以访问：**任何人**
4. 点击"部署"
5. 复制生成的Web App URL（格式：https://script.google.com/macros/s/xxxxxx/exec）

## 步骤4：配置网站
1. 打开 `lib/messageStore.ts`
2. 将 `SHEET_API_URL` 变量替换为你复制的URL
3. 重新构建并部署网站
