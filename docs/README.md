# API doc

## Get group info and latest 50 messages

- Url: `/api/chat/:name`
- Method: `Get`
- Query params: `?page=[integer]`
- Success Response:
  ```javascript
  {
    totalPageCount: 100,
    currentPage: 100,
    msgs: [{
      groupName: '',
      date: 1560825086000,
      type: 7, // 7: text 6: img 13: video 1: link
      text: 'hello world',
    }]
  }
  ```

- Examples
  - Get Latest 50 msgs: https://wewe.t9t.io/api/chat/t9t.io%20community%202
  - Get first page of msgs: https://wewe.t9t.io/api/chat/t9t.io%20community%202?page=1
