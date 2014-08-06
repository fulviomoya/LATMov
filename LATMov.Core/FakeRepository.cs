using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using LATMov.Core;
using LATMov.Models;

namespace LATMov.Core
{
  
    public class FakeRepository<T>: IRepository<IModels> where T: IModels
    {
        protected List<IModels> db = new List<IModels>();
        private Movie m = new Movie()
        {
           
            MovieModelsId = 1,
            name = "Feo de Dia lindo de Noche",
            releaseDate = new DateTime(2010, 10, 30),
            duration = 120,
            filmStudios = new List<FilmStudio> { new FilmStudio(){id = 1, nombre="Cayetano Record"}}, 
            soundTracks = new List<SoundTrack> { new SoundTrack(){songName = "La cucaracha", idSound =1 , singerName="La melaza"} }
        };

        public FakeRepository(){
            Insert((IModels)m);
        }

        public IModels GetById(int i)
        {
            return db.Find(t => t.id == i);
        }

        public List<IModels> GetAll(System.Linq.Expressions.Expression<Func<T, bool>> filter, Func<IQueryable<T>, IOrderedQueryable<T>> orderBy, string includeProperties)
        {
            return db.ToList<IModels>();
        }

        public IModels Find(int id)
        {
            return db.Find(t => t.id == id);
        }

        public void Insert(IModels t)
        {
            db.Add(t);
        }

        public void Delete(int Id)
        {
            db.Remove(db.Find(x => x.id == Id));
        }

        public void Delete(T entityToDelete)
        {
            db.Remove(entityToDelete);
        }

        public void Update(T entityToUpdate)
        {
            db.Remove(entityToUpdate);
            db.Add(entityToUpdate);
        }


        public List<IModels> GetAll(System.Linq.Expressions.Expression<Func<IModels, bool>> filter, Func<IQueryable<IModels>, IOrderedQueryable<IModels>> orderBy, string includeProperties) {
            throw new NotImplementedException();
        }

        public void Delete(IModels entityToDelete) {
            throw new NotImplementedException();
        }

        public void Update(IModels entityToUpdate) {
            throw new NotImplementedException();
        }
    }
}