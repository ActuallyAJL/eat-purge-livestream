using Microsoft.AspNetCore.Mvc;
using System;
using eat_purge_livestream.Models;
using eat_purge_livestream.Repositories;

namespace eat_purge_livestream.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepository;
        public CommentController(ICommentRepository commentRepository)
        {
            _commentRepository = commentRepository;
        }
    }
}
