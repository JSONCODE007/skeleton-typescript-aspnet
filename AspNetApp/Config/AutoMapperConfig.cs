using AutoMapper;

namespace AspNetApp.Controllers
{
    public class AutoMapperConfig
    {
        public static IMapper Mapper { get; protected set; }

        public static void Configure()
        {
            var config = new MapperConfiguration(cfg =>
            {
            });

            Mapper = config.CreateMapper();
        }
    }
}