using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LATMov.Core {
    public interface IRepository <T> where T: class{
         T GetById(int i);
         List<T> GetAll();
         T Find(int id);
         void Insert(T t);
         void Delete(object Id);
         void Delete(T entityToDelete);
         void Save();
    }
}
