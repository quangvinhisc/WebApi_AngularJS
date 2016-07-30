using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Linq;
using VinhShop.Data.Infrastructure;
using VinhShop.Data.Repositories;
using VinhShop.Model.Models;

namespace VinhShop.UnitTest.RepositoryTest
{
    [TestClass]
    public class PostCategoryRepositoryTest
    {
        IDbFactory dbFactory;
        IPostCategoryRepository objRepository;
        IUnitOfWork unitOfWork; 
        [TestInitialize]
        public void Initialize()
        {
            dbFactory = new DbFactory();
            objRepository = new PostCategoryRepository(dbFactory);
            unitOfWork = new UnitOfWork(dbFactory);
        }

        [TestMethod]
        public void PostCategory_Repository_GetAll()
        {
            var list = objRepository.GetAll().ToList();
            Assert.AreEqual(57, list.Count);
        }

        [TestMethod]
        public void PostCategory_Repository_Create()
        {
            PostCategory category = new PostCategory();
            category.Name = "Test category";
            category.Alias = "Test-category";
            category.Status = true;

            var result = objRepository.Add(category);
            unitOfWork.Commit();

            Assert.IsNotNull(result);
            Assert.AreEqual(1, result.ID);
        }

        [TestMethod]
        public void PostCategory_Repository_Delete()
        {
            IDbFactory dbFactory = new DbFactory();
            IPostCategoryRepository objRepository = new PostCategoryRepository(dbFactory);
            IUnitOfWork unitOfWork = new UnitOfWork(dbFactory);

            PostCategory category = new PostCategory();
            category.Name = "Test category";
            category.Alias = "Test-category";
            category.Status = true;

            var result = objRepository.Add(category);
            unitOfWork.Commit();

            var resultTest = objRepository.Delete(result.ID);
            unitOfWork.Commit();
            Assert.IsNotNull(resultTest);
            Assert.AreEqual(63, resultTest.ID);
        }
    }
}