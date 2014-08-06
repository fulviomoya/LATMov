using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LATMov.Persistence;
using System.Data.Entity;
using LATMov.Models;

namespace LATMov.Core {
    public class UnitOfWork: IDisposable {
        private readonly DbContext context;
        //private readonly IRepositoryFactory factory;

        //public UnitOfWork(DbContext context, IRepositoryFactory factory){
        //    this.context = context;
        //   // this.factory = factory;
        //}
        public UnitOfWork(DbContext context) {
            this.context = context;
            // this.factory = factory;
        }

        /// <summary>
        /// Method for create new repositorys generics through a factory 
        /// </summary>
        /// <typeparam name="T"> Type of entity to build</typeparam>
        /// <returns> A new object type of param T</returns>
        //IRepository<T> BuildRepository<T>() where T: class{
        //    return factory.BuildRepository<T>();
        //}
        
        /// <summary>
        /// Method for save all change of each repository managed right through the Unit of work
        /// </summary>
        public void Save() {
            context.SaveChanges();
        }

        #region dispose implementation
        private bool disposed = false;

        private void Dispose(bool disposing) {
            if(!this.disposed) {
                if(disposing) {
                    context.Dispose();
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
