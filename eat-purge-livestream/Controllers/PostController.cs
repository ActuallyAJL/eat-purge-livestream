using Microsoft.AspNetCore.Mvc;
using System;
using eat_purge_livestream.Models;
using eat_purge_livestream.Repositories;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

namespace eat_purge_livestream.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;
        private readonly IUserProfileRepository _userProfileRepository;
        public PostController(IPostRepository postRepository, IUserProfileRepository userProfileRepository)
        {
            _postRepository = postRepository;
            _userProfileRepository = userProfileRepository;
        }

        [HttpPost]
        public IActionResult Add(Post post)
        {
            var user = GetCurrentUserProfile();
            post.UserProfileId = user.Id;
            _postRepository.Add(post);
            return Ok(post);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Post post)
        {
            if (id != post.Id)
            {
                return BadRequest();
            }
            _postRepository.Update(post);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _postRepository.Delete(id);
            return NoContent();
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_postRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var post = _postRepository.Get(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetByUser(int userId)
        {
            return Ok(_postRepository.GetByUserId(userId));
        }

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }
    }
}
