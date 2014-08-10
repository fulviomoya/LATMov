using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(LATMov.Startup))]
namespace LATMov
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
