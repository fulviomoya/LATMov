using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using LATMov.Models;

namespace LATMov.Persistence {
    public class LATMovDbContext: DbContext {
        public LATMovDbContext() { 
            
        }

        #region DbSets Models
        public DbSet<Award> Awards { get; set; }
        public DbSet<Cast> Casts { get; set; }
        public DbSet<FilmStudio> FilmStudios { get; set; }
        public DbSet<Language> Languages { get; set; }
        public DbSet<Movie> Movies { get; set; }

        public DbSet<Photo> Photos { get; set; }
        public DbSet<SocialNetworkAccount> SocialNetworkAccounts { get; set; }
        public DbSet<SoundTrack> SoundTracks { get; set; }
        public DbSet<Trailler> Traillers { get; set; }
        #endregion
    }
}
