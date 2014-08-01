using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace LATMov.Models {
    public enum PhotoType {
        PRINCIPAL,
        SECONDARY
    }
    public class Photo {
        [Key]
        public int id {get; set;}
        public string url_photo { get; set; }
        public string extension { get; set; }
        public PhotoType photoType { get; set; }
       // size
    }
}
