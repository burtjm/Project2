using Microsoft.EntityFrameworkCore;
using System;


namespace WebAPI.Models
{
    public class StudentDBContext:DbContext
    {
        public StudentDBContext(DbContextOptions<StudentDBContext> options):base(options)
        {

        }

        public DbSet<Student> Students { get; set; }
    
      protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           modelBuilder.Entity<Student>().HasData(new Student
         {
                     id= 1,
                    firstname = "Sally",
                     lastname = "Goodman",
                    mobile = "414-555-9102",
                 email = "goodsally@gmail.com",
                 program = "Business",
                 age = 23

             },new Student{
               id= 2,
                    firstname = "Alice",
                     lastname = "Johnson",
                    mobile = "414-666-2929",
                 email = "alicej@gmail.com",
                 program = "Pre-Med",
                 age = 23
             }
             
             );

    //                 //firstname,lastname,mobile,email,program,age


}
}
}