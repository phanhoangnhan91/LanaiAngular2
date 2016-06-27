using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using System.IO;
using Microsoft.Extensions.Configuration;

namespace Lanai
{
    public class Startup
    {
        private static string _applicationPath = string.Empty;
        private static string _contentRootPath = string.Empty;
        public Startup(IHostingEnvironment env)
        {
            //_applicationPath = env.WebRootPath;
            _contentRootPath = env.ContentRootPath;
            //// Setup configuration sources.

            //var builder = new ConfigurationBuilder()
            //    .SetBasePath(_contentRootPath)
            //    .AddJsonFile("appsettings.json")
            //    .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

          
            //builder.AddEnvironmentVariables();
            //Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; set; }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {          

            // Add MVC services to the services container.
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            // this will serve up wwwroot
            app.UseFileServer();

            // this will serve up node_modules
            var provider = new PhysicalFileProvider(
                Path.Combine(_contentRootPath, "node_modules")
            );
            var _fileServerOptions = new FileServerOptions();
            _fileServerOptions.RequestPath = "/node_modules";
            _fileServerOptions.StaticFileOptions.FileProvider = provider;
            _fileServerOptions.EnableDirectoryBrowsing = true;
            app.UseFileServer(_fileServerOptions);


            // Custom authentication middleware
            //app.UseMiddleware<AuthMiddleware>();

            // Add MVC to the request pipeline.
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                // Uncomment the following line to add a route for porting Web API 2 controllers.
                routes.MapWebApiRoute("DefaultApi", "api/{controller}/{id?}");
            });

        }
    }
}
