Hướng dẫn cài đặt.
-	LƯU Ý: Do các thành viên trong nhóm đều sử dụng Window để code nên phần hướng dẫn cài đặt sẽ dành cho máy chạy Window.
-	Cài đặt python với version 3.x trên máy. (Download Python | Python.org)
-	Chạy local server bằng Python 3.x:
o	Mở Command Prompt tại folder CS105.L22.KHCL_Final-project-main sau khi đã unzip file (có thể tải về từ github: jonathanha52/CS105.L22.KHCL_Final-project: Repository for final project of UIT Computer Graphic course. )
o	Để mở local server, gõ command: python -m http.server
o	Mở browser trên máy (Chrome, Edge…) gõ vào URL: local:8000
o	Xong.
-	Lỗi có thể gặp: 
o	Failed to load module script:…. 
Nếu gặp lỗi dạng này, mở code của file index.html. Bỏ chế độ comment của dòng thứ 25 và xóa bỏ (hoặc thêm vào chế độ comment) ở dòng thứ 26. 
o	Can’t reach this page.
Kiểm tra trong cmd xem port đang nhận là bao nhiêu rồi thay đổi port trên URL.
