using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LATMov.Persistence;

namespace LATMov.Core {
    public class GenericRepository<T> : IRepository<T> where T : class{
        protected LATMovDbContext dbContext;
 
        public GenericRepository(LATMovDbContext dbContext){
            this.dbContext = dbContext;
        }

        public virtual T GetById(int i) {
            return null;
        }
        public virtual List<T> GetAll() { 
          //  dbContext.
            return null;
        }
        public virtual T Find(int id) { 
            //
            return null;
        }
        public virtual void Insert(T t) { 
            //
        }
        public virtual void Delete(object Id) { 
            //
        }
        public virtual void Delete(T entityToDelete) {
            //
        }
        public virtual void Save() {
            //
        }
    }
}
