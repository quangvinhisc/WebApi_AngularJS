using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Collections.Generic;
using VinhShop.Data.Infrastructure;
using VinhShop.Data.Repositories;
using VinhShop.Model.Models;
using VinhShop.Service;

namespace VinhShop.UnitTest.ServiceTest
{
    [TestClass]
    public class PostCategoryServiceTest
    {
        private Mock<IPostCategoryRepository> _mockRepository;
        private Mock<IUnitOfWork> _mockUnitOfWork;
        private IPostCategoryService _categoryService;
        private List<PostCategory> _listCategory;

        [TestInitialize]
        public void Initialize()
        {
            _mockRepository = new Mock<IPostCategoryRepository>();
            _mockUnitOfWork = new Mock<IUnitOfWork>();
            _categoryService = new PostCategoryService(_mockRepository.Object, _mockUnitOfWork.Object);
            _listCategory = new List<PostCategory>()
            {
                new PostCategory() {ID =1 ,Name="DM1",Status=true },
                new PostCategory() {ID =2 ,Name="DM2",Status=true },
                new PostCategory() {ID =3 ,Name="DM3",Status=true },
            };
        }

        [TestMethod]
        public void PostCategory_Service_GetAll()
        {
            _mockRepository.Setup(m => m.GetAll(null)).Returns(_listCategory);

            var result = _categoryService.GetAll() as List<PostCategory>;
            Assert.IsNotNull(result);
            Assert.AreEqual(3, result.Count);
        }

        [TestMethod]
        public void PostCategory_Service_Create()
        {
            PostCategory category = new PostCategory();
            category.Name = "Test";
            category.Alias = "Test";
            category.Status = true;

            _mockRepository.Setup(m => m.Add(category)).Returns((PostCategory p) =>
            {
                p.ID = 1;
                return p;
            });

            var result = _categoryService.Add(category);

            Assert.IsNotNull(result);
            Assert.AreEqual(1, result.ID);


        }

        [TestMethod]
        public void PostCategory_Service_GetByID()
        {
            //PostCategory category = new PostCategory();
            //category.Name = "Test";
            //category.Alias = "Test";
            //category.Status = true;

            //_mockRepository.Setup(m => m.Add(category)).Returns((PostCategory p) =>
            //{
            //    p.ID = 1;
            //    return p;
            //});

            //var result = _categoryService.Add(category);

            //_mockRepository.Setup(m => m.GetSingleById(result.ID)).Returns((PostCategory p) =>
            //{
            //    p.ID = 1;
            //    return p;
            //});

            //var resultTest = _categoryService.GetById(result.ID);
            //Assert.IsNotNull(resultTest);
            //Assert.AreEqual(1, resultTest.ID);

            IDbFactory dbFactory = new DbFactory();
            IPostCategoryRepository objRepository = new PostCategoryRepository(dbFactory);
            IUnitOfWork unitOfWork = new UnitOfWork(dbFactory);

            PostCategory category = new PostCategory();
            category.Name = "Test category";
            category.Alias = "Test-category";
            category.Status = true;

            var result = objRepository.Add(category);
            unitOfWork.Commit();

            var resultTest = objRepository.GetSingleById(result.ID);
            Assert.IsNotNull(resultTest);
            Assert.AreEqual(1, resultTest.ID);
        }

        
    }
}