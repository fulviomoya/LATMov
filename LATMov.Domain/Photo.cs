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
        public long id;
        public string url_photo;
        public string extension;
        public PhotoType photoType;
       // size
    }
}
