using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LATMov.Utilities {
    public class Enumerations {
        public enum Roles {
            Director,
            Producer,
            Writter,
            Actor
        }

        public enum Clasifications {
            G,
            PG,
            RC_17
        }

        public enum TypeAwards {
            Nomination,
            Winner
        }

        public enum GenreFile {
            Drama,
            Action,
            Comedy,
            Horor,
            Thriller, 
            Adventure, 
            Sci_Fiction,
            Family,
            Animation,
            History,
            Biography
        }

        public enum SocialNetworks {
            FACEBOOK,
            TWITTER,
            INSTAGRAM
        }
    }
}