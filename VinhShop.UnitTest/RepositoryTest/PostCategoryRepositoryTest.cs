using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
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
            Assert.AreEqual(1, list.Count);
        }

        [TestMethod]
        public void PostCategory_Repository_Create()
        {
            PostCategory category = new PostCategory();
            category.Name = "Test category";
            category.Alias = "Test-category";
            category.Status = true;

            //Error er = new Error();
            //er.Message = "Test error";
            //er.StackTrace = "Test error";
            //er.CreatedDate = DateTime.Now;
            //var result = objError.Add(er);

            var result = objRepository.Add(category);
            unitOfWork.Commit();

            Assert.IsNotNull(result);
            Assert.AreEqual(6, result.ID);
        }
    }
}