using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularInfiniteScroll.Startup))]
namespace AngularInfiniteScroll
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
