using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace LATMov.Models {
    public class Language {
        [Key]
        public string code {get; set;}
        public string description { get; set; } 
    }
}