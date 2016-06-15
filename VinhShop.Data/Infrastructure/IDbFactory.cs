using System;

namespace VinhShop.Data.Infrastructure
{
    public interface IDbFactory : IDisposable
    {
        VinhShopDbContext Init();
    }
}