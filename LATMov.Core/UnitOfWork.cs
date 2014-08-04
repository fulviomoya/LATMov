using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LATMov.Persistence;
using LATMov.Models;

namespace LATMov.Core {
    internal class UnitOfWork: IDisposable {
        private LATMovDbContext dbContext = new LATMovDbContext();
        private GenericRepository<Award> award = null;
        private GenericRepository<Cast> cast = null;
        private GenericRepository<FilmStudio> filmStudio = null;
        private GenericRepository<Language> language = null;
        private GenericRepository<Movie> movie = null;
        private GenericRepository<Photo> photo =  null;
        private GenericRepository<SocialNetworkAccount> socialNetWorkAccount = null;
        private GenericRepository<SoundTrack> soundTrack = null;
        private GenericRepository<Trailler> trailler = null;

        public GenericRepository<Award> Award {
            get {
                return this.award == null ? new GenericRepository<Award>(dbContext) : this.award;
            }
        }

        public GenericRepository<Cast> Cast {
            get {
                return this.cast == null ? new GenericRepository<Cast>(dbContext) : this.cast;
            }
        }

        public GenericRepository<FilmStudio> FilmStudio {
            get {
                return this.filmStudio == null ? new GenericRepository<FilmStudio>(dbContext) : this.filmStudio;
            }
        }
        
        public GenericRepository<Language> Language {
            get { 
                return this.language == null ? new GenericRepository<Language>(dbContext) : this.language;
            }
        }


        public GenericRepository<Movie> Movie {
            get {
                return this.movie == null ? new GenericRepository<Movie>(dbContext) : this.movie;
            }
        }

        public GenericRepository<Photo> Photo {
            get {
                return this.photo == null ? new GenericRepository<Photo>(dbContext) : this.photo;
            }
        }

        public GenericRepository<SocialNetworkAccount> SocialNetworkAccount {
            get {
                return this.SocialNetworkAccount == null ? new GenericRepository<SocialNetworkAccount>(dbContext) : this.socialNetWorkAccount;
            }
        }

        public GenericRepository<SoundTrack> SoundTrack {
            get { 
                return this.soundTrack == null ? new GenericRepository<SoundTrack>(dbContext): this.soundTrack;
            }
        }

        public GenericRepository<Trailler> Trailler {
            get {
                return this.trailler == null ? new GenericRepository<Trailler>(dbContext): this.trailler;
            }
        }

        /// <summary>
        /// Method for save all change of each repository managed right through the Unit of work
        /// </summary>
        public void Save() {
            dbContext.SaveChanges();
        }

        #region dispose implementation
        private bool disposed = false;

        private void Dispose(bool disposing) {
            if(!this.disposed) {
                if(disposing) {
                    dbContext.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose() {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        #endregion 
    }
}
