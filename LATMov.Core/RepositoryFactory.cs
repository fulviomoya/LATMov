using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using StructureMap;


namespace LATMov.Core {
    class RepositoryFactory : IRepositoryFactory{
        private readonly IContainer container;

        public RepositoryFactory(IContainer container) {
            this.container = container;
        }

        public IRepository<T> BuildRepository<T>() where T: class{
            var cadidate = container.TryGetInstance<GenericRepository<T>>();
            if(cadidate == null) {
                throw new NullReferenceException("Error with RepositoryFactory");
            }
            return cadidate;
        }
    }
}
