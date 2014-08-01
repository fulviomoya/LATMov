using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Linq.Expressions;

namespace LATMov.Core {
    public interface IRepository <T> where T: class{
         T GetById(int i);
         List<T> GetAll(Expression<Func<T, bool>> filter, Func<IQueryable<T>, IOrderedQueryable<T>> orderBy,
                        string includeProperties);
         T Find(int id);
         void Insert(T t);
         void Delete(object Id);
         void Delete(T entityToDelete);
         void Update(T entityToUpdate);
    }
}
