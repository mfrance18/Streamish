using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Streamish.Models;
using Streamish.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Streamish.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileRepository _upRepo;

        public UserProfileController(IUserProfileRepository videoRepository)
        {
            _upRepo = videoRepository;
        }

        [HttpGet("{firebaseUserId}")]
        public IActionResult GetByFirebaseUserId(string firebaseUserId)
        {
            var userProfile = _upRepo.GetByFirebaseUserId(firebaseUserId);
            if (userProfile == null)
            {
                return NotFound();
            }
            return Ok(userProfile);
        }

        [HttpGet("DoesUserExist/{firebaseUserId}")]
        public IActionResult DoesUserExist(string firebaseUserId)
        {
            var userProfile = _upRepo.GetByFirebaseUserId(firebaseUserId);
            if (userProfile == null)
            {
                return NotFound();
            }
            return Ok();
        }

        [HttpGet("{id}")]

        public string Get(int id)
        {
            return null;
        }

        [HttpGet("GetByIdWithVideos")]
        public IActionResult GetByIdWithVideos(int id)
        {
            UserProfile up = _upRepo.GetByIdWithVideos(id);
            if (up == null)
            {
                return NotFound();
            }
            return Ok(up);
        }

        [HttpPost]
        public IActionResult Register(UserProfile userProfile)
        {
            userProfile.DateCreated = DateTime.Now;
            _upRepo.Add(userProfile);
            return CreatedAtAction(
                nameof(GetByFirebaseUserId), new { firebaseUserId = userProfile.FireBaseUserId }, userProfile);
        }


    }
}
