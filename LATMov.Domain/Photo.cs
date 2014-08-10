using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace LATMov.Domain {
    public enum PhotoType {
        PRINCIPAL,
        SECONDARY
    }
    public class Photo {
        [Key]
        public int id {get; set;}
        public String urlPhoto { get; set; }
        public string extension { get; set; }
        public PhotoType photoType { get; set; }
      

    }
}
