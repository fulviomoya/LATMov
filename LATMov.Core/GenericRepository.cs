using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LATMov.Persistence;
using System.Data.Entity;
using System.Linq.Expressions;

namespace LATMov.Core {
    public class GenericRepository<T> : IRepository<T> where T : class{
        internal LATMovDbContext dbContext;
        internal DbSet<T> dbSet;
 
        public GenericRepository(LATMovDbContext dbContext){
            this.dbContext = dbContext;
            this.dbSet = dbContext.Set<T>();
        }

        public virtual T GetById(int i) {
            return null;
        }
        /// <summary>
        /// Method for get all items from persistence unit.
        /// </summary>
        /// <param name="filter">Expression for filter the query.</param>
        /// <param name="orderBy">Specificate the field to order.</param>
        /// <param name="includeProperties">One or a list using comma delimit with optional perferences. </param>
        /// <returns> Return a list with all items.</returns>
        public virtual List<T> GetAll(Expression<Func<T, bool>> filter = null,
                                      Func<IQueryable<T>,IOrderedQueryable<T>> orderBy = null,
                                      string includeProperties = "") {
            IQueryable<T> query = dbSet;

            if(filter != null) {
                query = query.Where(filter);
            }

            foreach(var includeProperty in includeProperties.Split
                (new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries)) {
                query = query.Include(includeProperty);
            }

            if(orderBy != null) {
                return orderBy(query).ToList<T>();
            } else {
                return query.ToList<T>();
            }
        }
        
        public virtual T Find(int id) { 
            return dbSet.Find(id);
        }
        
        public virtual void Insert(T t) {
            dbSet.Add(t);
        }
       
        public virtual void Delete(object id) {
            T _object = dbSet.Find(id);
            dbSet.Remove(_object);
        }

        public virtual void Delete(T entityToDelete) {
            if(dbContext.Entry(entityToDelete).State == EntityState.Detached) {
                dbSet.Attach(entityToDelete);
            }
            dbSet.Remove(entityToDelete);
        }

        public virtual void Update(T entityToUpdate) {
            dbSet.Attach(entityToUpdate);
            dbContext.Entry(entityToUpdate).State = EntityState.Modified;
        }
    }
}
