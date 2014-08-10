using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace LATMov.Domain {
    public class SoundTrack {
        [Key]
        public int idSound {get; set;}
        public string singerName { get; set; }
        public string songName { get; set; }
    }
}