using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using LATMov.Domain;

namespace LATMov.Models {
    public enum Clasifications {
        G,
        PG,
        RC_17
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

    public class MovieModels {
        private string name;
        private Person director;
        private double duration;
        private DateTime releaseDate;
        private List<GenreFile> genres;
        private Clasifications clasification;
        private List<LanguageModels> languages;
        private List<TraillerModels> traillers;
        private List<SocialNetworkAccountModels> socialNetworkAccounts;
        private List<FilmStudioModels> filmStudios;
        private List<AwardModels> awards;
        private List<SoundTrackModels> soundTracks;
        private List<PhotoModels> photos;
    }
}