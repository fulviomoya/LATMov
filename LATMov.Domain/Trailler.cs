using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace LATMov.Models {
    public class Trailler {
        [Key]
        public int id { get; set; }
        public int ordenCadinally { get; set; }
        public DateTime releaseDate { get; set; }
    }
}
