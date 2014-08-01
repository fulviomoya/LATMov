using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace LATMov.Models {
    public class FilmStudio {
        [Key]
        public int id { get; set; }
        public string nombre { get; set; }
    }
}