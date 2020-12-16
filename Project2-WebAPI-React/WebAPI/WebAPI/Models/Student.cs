using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


namespace WebAPI.Models
{
    public class Student
    {
        [Key]
        public int id { get; set; }
        //firstname,lastname,mobile,email,age,program

        [Column(TypeName ="nvarchar(100)")]
        public string firstname { get; set; }
         [Column(TypeName ="nvarchar(100)")]
        public string lastname { get; set; }

        [Column(TypeName = "nvarchar(16)")]
        public string mobile { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string email { get; set; }
        
        public int age { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string program { get; set; }
    }
}
