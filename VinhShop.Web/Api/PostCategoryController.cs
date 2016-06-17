using System.Net;
using System.Net.Http;
using System.Web.Http;
using VinhShop.Data.Infrastructure;
using VinhShop.Data.Repositories;
using VinhShop.Model.Models;
using VinhShop.Service;
using VinhShop.Web.Infrastructure.Core;

namespace VinhShop.Web.Api
{
    [RoutePrefix("api/postcategory")]
    public class PostCategoryController : ApiControllerBase
    {
        private IPostCategoryService _postCategoryService;

        public PostCategoryController(IErrorService errorService
            , IPostCategoryService postCategoryService) : base(errorService)
        {
            this._postCategoryService = postCategoryService;
        }

        // GET api/<controller>
        [Route("getall")]
        public HttpResponseMessage Get(HttpRequestMessage request)
        {
            #region Test 1
            //PostCategory category = new PostCategory();
            //for (int i = 0; i < 5; i++)
            //{
            //    category.Name = "Test category";
            //    category.Alias = "Test-category";
            //    category.Status = true;
            //    var result = _postCategoryService.Add(category);
            //    _postCategoryService.Save();
            //}
            #endregion
            #region Test 2
            //IDbFactory dbFactory = new DbFactory(); ;
            //IPostCategoryRepository objRepository = new PostCategoryRepository(dbFactory); 
            //IUnitOfWork unitOfWork = new UnitOfWork(dbFactory);

            //PostCategory category = new PostCategory();
            //category.Name = "Test category";
            //category.Alias = "Test-category";
            //category.Status = true;

            //var result = objRepository.Add(category);
            //unitOfWork.Commit();
            #endregion
            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;

                var listCategory = _postCategoryService.GetAll();
                response = request.CreateResponse(HttpStatusCode.OK, listCategory);

                return response;
            });
        }

        // POST api/<controller>
        public HttpResponseMessage Post(HttpRequestMessage request, PostCategory postCategory)
        {
            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;
                if (ModelState.IsValid)
                {
                    request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
                else
                {
                    var category = _postCategoryService.Add(postCategory);
                    _postCategoryService.Save();
                    response = request.CreateResponse(HttpStatusCode.Created, category);
                }
                return response;
            });
        }

        // PUT api/<controller>/5
        public HttpResponseMessage Put(HttpRequestMessage request, PostCategory postCategory)
        {
            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;
                if (ModelState.IsValid)
                {
                    request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
                else
                {
                    _postCategoryService.Update(postCategory);
                    _postCategoryService.Save();
                    response = request.CreateResponse(HttpStatusCode.OK);
                }
                return response;
            });
        }

        // DELETE api/<controller>/5
        public HttpResponseMessage Delete(HttpRequestMessage request, int id)
        {
            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;
                if (ModelState.IsValid)
                {
                    request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
                else
                {
                    _postCategoryService.Delete(id);
                    _postCategoryService.Save();
                    response = request.CreateResponse(HttpStatusCode.OK);
                }
                return response;
            });
        }
    }
}