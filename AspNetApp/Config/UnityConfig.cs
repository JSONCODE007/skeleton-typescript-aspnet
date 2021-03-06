﻿using Microsoft.Practices.Unity;
using System.Web.Http;
using Unity.WebApi;

namespace AspNetApp.Controllers
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
            var container = new UnityContainer();

            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}