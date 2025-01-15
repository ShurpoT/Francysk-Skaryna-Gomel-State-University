program Age;
var K: integer;
f: text; // объявляем переменную для файла
begin
  write('Введите ваш возраст от 14 до 26: ');
  readln(K);
  assign(f, 'age.txt'); // открываем файл age.txt для записи
  rewrite(f); // очищаем файл, если он уже существовал
  if (K < 14) or (K > 26) then
    writeln(f, 'Неверный ввод') // записываем в файл
  else
  begin
    write(f, 'Мне ', K, ' '); // записываем в файл
    case K mod 10 of
      1: writeln(f, 'год'); // записываем в файл
      2, 3, 4: writeln(f, 'года'); // записываем в файл
      else writeln(f, 'лет'); // записываем в файл
    end;
  end;
  close(f); // закрываем файл
end.