using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using LATMov.Domain;

namespace LATMov.Persistence {
    public class LATMovDbInitializer: DropCreateDatabaseAlways<LATMovDbContext> {
        protected override void Seed(LATMovDbContext context) {
            #region Charging genres 
            List<Genre> Genres = new List<Genre>();
            Genres.Add(new Genre { Name = "Drama", GenreId=1});
            #endregion
            
            context.Movies.Add(new Movie {
                genres = Genres.ToList<Genre>(),
                name = "Feo de Dia lindo de Noche",
                releaseDate = new DateTime(2010, 10, 30),
                soundTracks = new List<SoundTrack> {new SoundTrack() }
            });
            base.Seed(context);
        }
    }
}
