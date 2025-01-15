using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            string sourceFileName = "info_file1.txt";
            string destinationFileName = "destination1.txt";

            try
            {
                using (FileStream sourceFile = new FileStream(sourceFileName, FileMode.Open, FileAccess.Read))
                {
                    using (FileStream destinationFile = new FileStream(destinationFileName, FileMode.Create, FileAccess.Write))
                    {
                        byte[] buffer = new byte[1024];
                        int bytesRead;
                        while ((bytesRead = sourceFile.Read(buffer, 0, buffer.Length)) > 0)
                        {
                            destinationFile.Write(buffer, 0, bytesRead);
                        }
                    }
                }
                Console.WriteLine("Копирование файла успешно завершено!");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Ошибка при копировании файла: " + ex.Message);
            }
        }
    }

}
