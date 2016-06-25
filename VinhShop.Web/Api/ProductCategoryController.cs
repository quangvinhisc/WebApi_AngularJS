using AutoMapper;
using System.Collections;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Mvc;
using VinhShop.Model.Models;
using VinhShop.Service;
using VinhShop.Web.Infrastructure.Core;
using VinhShop.Web.Models;

namespace VinhShop.Web.Api
{
    [RoutePrefix("api/productcategory")]
    public class ProductCategoryController : ApiControllerBase
    {
        private IProductCategoryService _ProductCategoryService;

        public ProductCategoryController(IErrorService errorService
            , IProductCategoryService ProductCategoryService) : base(errorService)
        {
            this._ProductCategoryService = ProductCategoryService;
        }

        [Route("getall")]
        public HttpResponseMessage Get(HttpRequestMessage request)
        {
            return CreateHttpResponse(request, () =>
            {
                var model = _ProductCategoryService.GetAll();
                var listProductCategoryVm = Mapper.Map<IEnumerable<ProductCategory>, IEnumerable<ProductCategoryViewModel>>(model);
                var response = request.CreateResponse(HttpStatusCode.OK, listProductCategoryVm);
                return response;
            });
        }
    }
}