using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using LATMov.Utilities;

namespace LATMov.Models {
    public class MovieModels {
        private string name;
        private Person director;
        private double duration;
        private DateTime releaseDate;
        private List<Enumerations.GenreFile> genres;
        private Enumerations.Clasifications clasification;
        private List<LanguageModels> languages;
        private List<TraillerModels> traillers;
        private List<SocialNetworkAccountModels> socialNetworkAccounts;
        private List<FilmStudioModels> filmStudios;
        private List<AwardModels> awards;
        private List<SoundTrackModels> soundTracks;
        private List<PhotoModels> photos;
    }
}