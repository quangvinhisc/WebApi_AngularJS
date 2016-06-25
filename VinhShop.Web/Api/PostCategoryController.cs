using AutoMapper;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using VinhShop.Data.Infrastructure;
using VinhShop.Data.Repositories;
using VinhShop.Model.Models;
using VinhShop.Service;
using VinhShop.Web.Infrastructure.Core;
using VinhShop.Web.Models;
using VinhShop.Web.Infrastructure.Extensions;

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

                var listPostCategory = _postCategoryService.GetAll();
                var listPostCategoryVm = Mapper.Map<List<PostCategoryViewModel>>(listPostCategory);
                response = request.CreateResponse(HttpStatusCode.OK, listPostCategoryVm);

                return response;
            });
        }

        // POST api/<controller>
        [Route("add")]
        public HttpResponseMessage Post(HttpRequestMessage request, PostCategoryViewModel postCategoryVm)
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
                    PostCategory newPostCategory = new PostCategory();
                    newPostCategory.UpdatePostCategory(postCategoryVm);
                    var category = _postCategoryService.Add(newPostCategory);
                    _postCategoryService.Save();
                    response = request.CreateResponse(HttpStatusCode.Created, category);
                }
                return response;
            });
        }

        // PUT api/<controller>/5
        [Route("update")]
        public HttpResponseMessage Put(HttpRequestMessage request, PostCategoryViewModel postCategoryVm)
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
                    var postCategoryDb = _postCategoryService.GetById(postCategoryVm.ID);
                    postCategoryDb.UpdatePostCategory(postCategoryVm);
                    _postCategoryService.Update(postCategoryDb);
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