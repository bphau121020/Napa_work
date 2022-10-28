# Napa_work
link demo: https://napa-six.vercel.app/
vì git pages của em có vấn đề nên em xin phép link qua vercel github! 

lý thuyết 10 câu hỏi JS

1. setTimeout(() => {
  console.log("Hello!!!");
}, 1000);
var Time = Date.now();
while (Date.now() - Time < 3000) {}
2. a Thành bảo để đó vì là phần nodejs, em sẽ tìm hiểu thêm khi làm chủ đc js và reactjs.
3. a Thành bảo để đó vì đã làm phần facebook.
4. Phân biệt let, var, const trong javascript
•	Var: phạm vi Function Scope, Global Scope có thể khai lại; 
•	Let: chỉ có Function Scope có thể khai báo lại;
•	Const: chỉ có Function Scope không thể khai báo lại.
Note: 
Global scope: có phạm vị hoạt động ở bất kỳ trong mã javascript. 
Function scope: có phạm vi hoạt động trong function khikhai báo biến đó. 
Block scope: có phạm vị trong cặp dấu {} khi khai báo biến đó.
5. Phân biệt tham chiếu, tham trị
•	Tham trị (Value Types): khi gán một giá trị thì nó sẽ lưu lại giá trị đó và tại một thời điểm thì chỉ lưu một giá trị. Kiểu dữ liệu thường dung (String, Number, Boolean, undefined, null, Symbol)
•	Tham chiếu (Reference Types): khi gán một giá trị thì nó không lưu lại giá trị này mà thực chất nó lưu lại địa chỉ của ô nhớ lưu giá trị này. Kiểu dữ liệu thường dung (Object, Array, Function)
6. Phân biệt callback, async await, Promise 
•	Callback: là một hàm được truyền vào hàm khác như một tham số. Khi ta gọi một tác vụ bất đồng bộ để thực hiện một hành động, sau khi hành động đó được thực hiện xong, có kết quả, thì hàm callback sẽ được gọi.
•	Promise: tương tự callback nhưng giúp ta tránh được hiện tượng callback hell (các callback được gọi liên tục lồng nhau thì sẽ gặp phải hiện tượng callback hell)
•	Async function là hàm trả về một promise còn Await là từ khoá được sử dụng bên trong hàm async để đảm bảo tất cả các promise bên trong async function trở nên đồng bộ
7. Phân biệt sự khác nhau giữa map, forEach 
•	forEach và map giống nhau ở điểm: đều thực hiện hàm callback lên từng phẩn tử ở trong mảng
•	Khác: 
o	forEach: hàm callback có thể thay đổi trực tiếp mảng ban đầu và không trả về giá trị nào cả
o	map: tạo ra một mảng mới có cùng số phần tử với mảng cũ và trả về mảng mới và có trả về giá trị (thường em dung map để đọc tuần tự trong các file json) 
8. Phân biệt sự khác nhau giữa some, every 
•	Some: Lặp tất cả các phần tử trong một Array, chỉ phần 1 phần tử thoả mãn điều kiện thì Array này sẽ trả về true
•	Every: Nếu tất cả các phần tử trong mảng thoả mãn một hoặc nhiều điều kiện. Hàm này sẽ trả về true, nhưng chỉ cần có 1 phần trử không thoả mãn điều kiện thì hàm này sẽ trả về false.
9. Phân biệt worker, child process 
•	Child process: tạo ra bộ nhớ ảo, làm tốn một lượng lớn tài nguyên để phân nhánh một quy trình con. Các quy trình được phân nhánh có thể giao tiếp với luồng chính thông qua các sự kiện và ngược lại, các quy trình đã phân nhánh thì kh thể giao tiếp.
•	Worker: Tương tự như quy trình con, nhưng các quy trình phân nhánh có thể giao tiếp với nhau bằng cách sử dụng bufferArray
10. Blocking, non blocking, vì sao Nodejs chạy đơn luồng mà không bị blocking.
•	Blocking: có nghĩa là các dòng lệnh được thực hiện một cách tuần tự. Khi một dòng lệnh ở phía trước chưa được hoàn thành thì các dòng lệnh phía sau sẽ chưa được thực hiện và phải đợi khi mà thao tác phía trước hoàn tất.
•	Non-blocking: các dòng lệnh không nhất thiết phải lúc nào cũng phải thực hiện một cách tuần tự và đồng bộ với nhau. Về mặt logic dòng lệnh phía sau không phụ thuộc vào kết quả của dòng lệnh phía trước.
•	Nodejs đơn luồng mà không bị blocking do sử dụng cơ chế event loop, ở Server chỉ có duy nhất 1 tiến trình chạy để sử lý tất cả các request của client. Tiến trình chạy theo kiểu over loop. 
- lưu ý về Event Loop: Event loop nó có nhiệm vụ là đồng bộ Queue vs Call Stack. Nếu Call Stack mà trống thì gọi hàm trong Queue, mà thằng Queue là thằng nào nằm trong hàng đợi trước thì gọi thực thi trong Call Stack trước.

Em cảm ơn vì đã đọc!
