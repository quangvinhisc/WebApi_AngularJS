namespace VinhShop.Data.Infrastructure
{
    public interface IUnitOfWork
    {
        void Commit();
    }
}