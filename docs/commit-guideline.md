# 📘 Hướng Dẫn Commit Theo Chuẩn Conventional Commits

> Áp dụng cho dự án **clo-ui-lib**

---

## ✅ Cấu trúc commit

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Ví dụ:

```bash
feat(button): add support for icon and text layout
```

```bash
fix(video-player): handle crash when audio track missing

Fallback to default audio if metadata is not present.
```

---

## 🏷️ Loại commit (`<type>`)

| Loại      | Mô tả                                                   |
|-----------|----------------------------------------------------------|
| `feat`    | Thêm tính năng mới (component, props, layout mới...)     |
| `fix`     | Sửa lỗi (hiển thị, responsive, logic...)                 |
| `docs`    | Cập nhật tài liệu (`README`, hướng dẫn, ví dụ...)        |
| `style`   | Sửa style/code format (whitespace, indent...)            |
| `refactor`| Cải tổ code không làm thay đổi chức năng                 |
| `test`    | Thêm/sửa test                                            |
| `chore`   | Công việc vặt (scripts, cấu hình, phụ thuộc...)          |
| `ci`      | Thay đổi cấu hình CI/CD                                  |
| `build`   | Thay đổi trong hệ thống build (vite, tsconfig...)        |
| `perf`    | Tối ưu hiệu năng                                         |

---

## 💡 Tips

- Sử dụng tiếng Anh cho phần description.
- Giữ phần mô tả ngắn gọn, súc tích và rõ ràng.
- Nếu cần, có thể mô tả thêm ở phần body (dùng `-m` thứ 2 khi commit).

---

## ⚙️ Công cụ hỗ trợ

- Đã cấu hình `Lefthook` + `commitlint` để kiểm tra commit message.
- Khi commit sai format, Git sẽ báo lỗi.

---

## 📎 Tài liệu tham khảo

- 🌐 [conventionalcommits.org](https://www.conventionalcommits.org/)
