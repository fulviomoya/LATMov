using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LATMov.Models {
    public class SoundTrackModels {
        private string singerName;
        private string songName;

        public string SingerName {
            get {
                return singerName;
            }
            set {
                singerName = value;
            }
        }
     
        public string SongName {
            get {
                return songName;
            }
            set {
                songName = value;
            }
        }
    }
}