using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;


namespace LATMov.Domain {
    public enum Clasifications {
        G,
        PG,
        RC_17
    }

    public enum Genre {
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

    public class Movie :IModels {
        [Key]
        public int id { get; set; }
        public string name { get; set;}
        public virtual Director director { get; set; }
        public double duration { get; set; }
        public virtual DateTime releaseDate { get; set; }
        public virtual List<Genre> genres { get; set; }
        public virtual Clasifications clasification { get; set; }
        public virtual List<Language> languages { get; set; }
        public virtual List<Trailler> traillers { get; set; }
        public virtual List<SocialNetworkAccount> socialNetworkAccounts { get; set; }
        public virtual List<FilmStudio> filmStudios { get; set; }
        public virtual List<Award> awards { get; set; }
        public virtual List<SoundTrack> soundTracks { get; set; }
        public virtual List<Photo> photos { get; set; }
        
    }
}