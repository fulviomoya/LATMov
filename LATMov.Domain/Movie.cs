using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using LATMov.Domain;
using System.ComponentModel.DataAnnotations; 


namespace LATMov.Models {
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
        public int MovieModelsId { get; set; }
        public string name { get; set;}
        public Person director { get; set; }
        public double duration { get; set; }
        public DateTime releaseDate { get; set; }
        public List<Genre> genres { get; set; }
        public Clasifications clasification { get; set; }
        public List<Language> languages { get; set; }
        public List<Trailler> traillers { get; set; }
        public List<SocialNetworkAccount> socialNetworkAccounts { get; set; }
        public List<FilmStudio> filmStudios { get; set; }
        public List<Award> awards { get; set; }
        public List<SoundTrack> soundTracks { get; set; }
        public List<Photo> photos { get; set; }
        public int id {get; set;}
    }
}