using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            createEmptyFile();
            createFileWithInfo();
            searchAndEditData();
        }
        static void createEmptyFile()
        {
            using (StreamWriter file = new StreamWriter("empty_file.txt"))
            {
                Console.WriteLine("Пустой файл успешно создан по пути: " + Path.GetFullPath("empty_file.txt"));
            }
        }
        static void createFileWithInfo()
        {
            using (StreamWriter file = new StreamWriter("info_file.txt"))
            {
                file.WriteLine("Имя: Смоляров Александр");
                file.WriteLine("Возраст: 20");
                file.WriteLine("Профессия: Техник-Программист");
                Console.WriteLine("Файл с информацией успешно создан по пути: " + Path.GetFullPath("info_file.txt"));
            }
        }
        static void searchAndEditData()
        {
            string[] lines = File.ReadAllLines("info_file.txt");
            Console.WriteLine("Содержимое файла:");
            foreach (string line in lines)
            {
                if (!string.IsNullOrEmpty(line))
                {
                    Console.WriteLine(line);
                }
            }

            Console.Write("Введите слово для замены: ");
            string oldWord = Console.ReadLine();
            Console.Write("Введите новое слово: ");
            string newWord = Console.ReadLine();

            string tempFile = "temp_file.txt";
            using (StreamWriter writer = new StreamWriter(tempFile))
            {
                foreach (string line in lines)
                {
                    string updatedLine = line.Replace(oldWord, newWord);
                    writer.WriteLine(updatedLine);
                }
            }

            File.Delete("info_file.txt");
            File.Move(tempFile, "info_file.txt");

            string[] updatedLines = File.ReadAllLines("info_file.txt");
            Console.WriteLine("Содержимое файла после замены:");
            foreach (string line in updatedLines)
            {
                if (!string.IsNullOrEmpty(line))
                {
                    Console.WriteLine(line);
                }
            }

            Console.Write("Сохранить изменения в файле? (y/n): ");
            char choice = Console.ReadKey().KeyChar;
            if (choice == 'y' || choice == 'Y')
            {
                Console.WriteLine("\nИзменения сохранены в файле.");
            }
            else
            {
                Console.WriteLine("\nИзменения не сохранены.");
            }
        }
    }

}
