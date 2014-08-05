using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace LATMov.Core {
    interface IUnitOfWork {
        IRepository<T> BuildRepository<T>() where T: class;
        void Save();
    }
}
