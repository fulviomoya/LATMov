using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using LATMov.Models;

namespace LATMov.Persistence {
    public class LATMovDbContext: DbContext {
        public LATMovDbContext() : base("LATMovDataBase") { 
            
        }

        
        DbSet<AwardModels> AwardModels { get; set; }
    }
}
