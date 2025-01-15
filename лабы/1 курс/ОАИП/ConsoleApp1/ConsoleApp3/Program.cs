using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    class Program
    {
        class Person
        {
            public string Name { get; set; }
            public virtual void DisplayInfo()
            {
                Console.WriteLine($"Имя: {Name}");
            }
        }
        class Employee : Person
        {
            public string Profession { get; set; }
            public override void DisplayInfo()
            {
                Console.WriteLine($"Имя: {Name}  Профессия: {Profession}");
            }
        }
        static void Main(string[] args)
        {
            Employee employee = new Employee { Name = "Александр", Profession = "Техник-программист" };
            employee.DisplayInfo();
        }
    }

}
